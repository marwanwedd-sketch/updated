# How to Upload Product Folders to GitHub

## Method 1: Using GitHub Website (Easiest)

### Step 1: Navigate to Your Repository
1. Go to your GitHub repository: `https://github.com/your-username/siam-petfood`
2. Click on the folder where you want to add products (e.g., `products/` or root)

### Step 2: Upload Folder
1. Click **"Add file"** button → Select **"Upload files"**
2. Drag and drop your entire product folder OR click "choose your files" and select all files in the folder
3. Add a commit message: `"Add product: [Product Name]"`
4. Click **"Commit changes"**

### Step 3: Organize Products
Create a folder structure like this:
```
siam-petfood/
├── products/
│   ├── product-1/
│   │   ├── image.jpg
│   │   ├── description.txt (optional)
│   ├── product-2/
│   │   ├── image.jpg
│   │   └── description.txt
```

## Method 2: Using Git Command Line

### Step 1: Navigate to Your Project
```bash
cd c:\Users\Marwan Abogofa\Desktop\siam-petfood\siam-petfood
```

### Step 2: Create Products Folder (if it doesn't exist)
```bash
mkdir products
```

### Step 3: Add Your Product Folder
```bash
# Copy your product folder to the products directory
# Then add it to git
git add products/
git commit -m "Add product: [Product Name]"
git push origin main
```

### Step 4: Upload Multiple Products
```bash
# Add all product folders at once
git add products/product-1/ products/product-2/ products/product-3/
git commit -m "Add multiple products"
git push origin main
```

## Method 3: Using GitHub Desktop (Visual)

1. Open GitHub Desktop
2. Click **"File"** → **"Add Local Repository"** (if not already added)
3. Navigate to your project folder
4. Copy your product folders into the project
5. GitHub Desktop will show the new files
6. Write a commit message
7. Click **"Commit to main"**
8. Click **"Push origin"**

## Recommended Folder Structure

```
siam-petfood/
├── products/
│   ├── dog-food-premium/
│   │   ├── main-image.jpg
│   │   ├── image-1.jpg (optional)
│   │   └── image-2.jpg (optional)
│   ├── cat-food-premium/
│   │   ├── main-image.jpg
│   │   └── description.txt
│   └── treats-dog/
│       ├── main-image.jpg
│       └── variants.jpg
```

## Tips

1. **Use descriptive folder names**: `dog-food-premium` instead of `product1`
2. **Keep main image**: Name the primary image `main-image.jpg` or `image.jpg`
3. **Add descriptions**: Create a `description.txt` file in each folder with product details
4. **Optimize images**: Compress images before uploading to keep repository size small
5. **Commit regularly**: Upload products one at a time with clear commit messages

## After Uploading

Once uploaded, update the `ProductSection.tsx` file to reference the new product images:
```typescript
import product1 from '../products/product-1/main-image.jpg';
```
