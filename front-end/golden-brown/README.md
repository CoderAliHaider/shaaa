# Golden Brown Cookie Project

## Overview
The Golden Brown project is a web application designed to showcase and sell a variety of cookies. The application features a visually appealing layout with sections for product display, information about the brand, and a map component to help users find store locations.

## Project Structure
The project is organized as follows:

```
golden-brown
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── footer.tsx        # Footer component for the application
│   │   │   ├── header.tsx        # Header component for the application
│   │   │   └── map.tsx           # Map component for displaying store locations
│   │   ├── Utills
│   │   │   └── constants.ts      # Constants used throughout the application
│   │   └── page.tsx              # Main page component of the application
├── public
│   ├── images                     # Directory containing image assets
│   └── videos                     # Directory containing video assets
├── package.json                   # Configuration file for npm
└── README.md                      # Documentation for the project
```

## Features
- **Header and Footer**: The application includes a header and footer for consistent navigation and branding.
- **Cookie Collection Display**: A section dedicated to showcasing the various cookies available for purchase.
- **Map Component**: An interactive map that allows users to select a country and view store locations based on their selection.
- **Responsive Design**: The application is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.

## Installation
To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd golden-brown
npm install
```

## Usage
To run the application locally, use the following command:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the application.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.