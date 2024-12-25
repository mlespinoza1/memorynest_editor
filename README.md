# Memory Nest Editor

A modern, responsive media transformation platform built with Next.js 13+ (App Router), React, TypeScript, and Tailwind CSS. This project is designed for efficient indexing and processing of media files, leveraging AI-driven transformations for optimal performance.

## 🌳 Project Structure

```
memory-nest/
├── README.md                        # Project overview and setup instructions
├── app/
│   ├── globals.css                   # Global styles for the application
│   ├── layout.tsx                    # Main layout component for the application
│   └── page.tsx                      # Main page component for the application
├── components/
│   ├── feature-list.tsx              # Component for listing features
│   ├── feature-toggle.tsx            # Component for toggling features
│   ├── footer.tsx                    # Footer component
│   ├── header.tsx                    # Header component
│   ├── media-gallery.tsx             # Component for displaying media galleries
│   ├── preview-bar.tsx               # Component for previewing media
│   ├── theme-provider.tsx            # Component for providing theme context
│   ├── theme-toggle.tsx              # Component for toggling themes
│   └── ui/
│       └── icon.tsx                  # Component for rendering icons
├── lib/
│   ├── constants.ts                  # Constants used across the application
│   ├── theme.ts                      # Theme configuration and utilities
│   └── store/
│       ├── create-store.ts           # Function to create the application store
│       └── provider.tsx              # Provider component for the application store
├── types/
│   └── index.ts                      # TypeScript type definitions
```

### Relevant Notes

- **app/**: Contains the main application files, including global styles and the main layout and page components. These files are essential for rendering the application and setting up the initial structure.
- **components/**: Contains reusable React components, such as `media-gallery.tsx`, which is critical for displaying and interacting with media files. The components are designed to be modular and reusable, enhancing the overall maintainability of the project.
- **lib/**: Contains utility files, such as `constants.ts` and `theme.ts`, as well as state management logic in the `store/` directory. These files are crucial for maintaining application-wide settings and managing state efficiently.
- **types/**: Contains TypeScript type definitions, ensuring type safety across the project. This directory is essential for maintaining consistency and reducing runtime errors.

The project is structured to support fast AI processing for indexing and media transformation, with a focus on modularity, reusability, and performance.
