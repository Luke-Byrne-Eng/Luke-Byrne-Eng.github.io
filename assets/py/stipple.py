import numpy as np
import cv2
import json
from scipy.spatial import Voronoi, voronoi_plot_2d
import random

def load_and_grayscale(image_path):
    """Load an image and convert it to grayscale."""
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    #image = 255 - image  # Invert the image
    return image / 255.0  # Normalize to 0-1

def rejection_sampling(image, n_points):
    """Generate initial points based on the grayscale intensity."""
    points = []
    height, width = image.shape
    while len(points) < n_points:
        x, y = random.randint(0, width - 1), random.randint(0, height - 1)
        if random.random() < (image[y, x] ** 1 ):  # Use pixel intensity as a probability
            points.append([float(x), float(y)])  # Store as float
    return np.array(points, dtype=np.float64)  # Ensure array is of type float64


def compute_weighted_centroids(points, image):
    """Compute weighted centroids for each Voronoi cell."""
    vor = Voronoi(points)
    centroids = np.zeros_like(points, dtype=np.float64)
    weights = np.zeros(len(points), dtype=np.float64)

    # Ensure image dimensions are integers
    height, width = int(image.shape[0]), int(image.shape[1])

    for i, region in enumerate(vor.point_region):
        vertices = vor.regions[region]
        if -1 in vertices:  # Skip cells with vertices at infinity
            centroids[i] = points[i]
            continue
        else:
            vert_coords = vor.vertices[vertices]
            cell_mask = np.zeros((height, width), dtype=np.uint8) 
            vert_coords_int = np.int32(vert_coords+0.5)
            cv2.fillPoly(cell_mask, [vert_coords_int], 1)
            pixel_indices = np.where(cell_mask == 1)
            if len(pixel_indices[0]) > 0:  # Check if there are any pixels in the mask
                pixel_values = image[pixel_indices]
                total_weight = np.sum(pixel_values)
                if total_weight > 0:
                    centroid_x = np.sum(pixel_indices[1] * pixel_values) / total_weight
                    centroid_y = np.sum(pixel_indices[0] * pixel_values) / total_weight
                    centroids[i] = [centroid_x, centroid_y]
                else:
                    centroids[i] = points[i]  # Or some other default handling
                weights[i] = total_weight

    return centroids, weights


def adjust_points(points, centroids, weights, i, n_iterations):
    """Adjust points towards their weighted centroids."""
    # Use a cosine adjustment factor to slow down the movement over time
    adjustment_factor = 0.05 + (1 - np.cos(2 * np.pi * (i / n_iterations)))
    movement_vectors = centroids - points
    points += (movement_vectors * adjustment_factor)

def save_intermediate_states(states, filename="stipple_states.json"):
    """Save the intermediate states to a JSON file."""
    with open(filename, 'w') as f:
        json.dump(states, f)

def stipple(image_path, n_points, n_iterations):
    """Perform the stipple effect on an image."""
    image = load_and_grayscale(image_path)
    points = rejection_sampling(image, n_points)
    states = []

    for i in range(n_iterations):
        print(f"Iteration {i + 1} / {n_iterations}")
        centroids, weights = compute_weighted_centroids(points, image)
        adjust_points(points, centroids, weights, i, n_iterations)
        states.append(points.tolist())

    print(len(states))
    save_intermediate_states(states)
    print("Done")

if __name__ == "__main__":
    stipple("luke-byrne.png", 3000, 30)
