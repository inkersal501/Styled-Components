# Styled Components in the Project

This project utilizes **`styled-components`** to style React components using tagged template literals. Styled-components allow you to write CSS directly in your JavaScript files, enabling dynamic and reusable component styling.

## What are `styled-components`?

`styled-components` is a library for React and React Native that lets you style components with actual CSS syntax while keeping styles scoped to individual components. It allows for dynamic styling based on props, extending styles, and maintaining a clear and modular structure for your components.

## Features Used

1. **Dynamic Styling with Props**:
   - Styles in components can dynamically adapt based on the props passed to them.
   - Example:
     ```javascript
     const ThemedDiv = styled.div`
       background-color: ${(props) => (props.dark ? '#333' : 'white')};
       color: ${(props) => (props.dark ? 'white' : '#333')};
     `;
     ```

2. **Hover Effects**:
   - Styles can change based on states like hover, focus, etc.
   - Example:
     ```javascript
     const StyledCard = styled.div`
       &:hover {
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
       }
     `;
     ```

3. **Nested Styles**:
   - Styles for child elements can be defined directly within the parent component.
   - Example:
     ```javascript
     const StyledCard = styled.div`
       & > h2 {
         color: #333;
         font-size: 1.5em;
       }

       & > p {
         color: #666;
       }
     `;
     ```

4. **Extending Components**:
   - Base components can be extended with additional styles.
   - Example:
     ```javascript
     const Card = styled.div`
       background-color: white;
       padding: 16px;
       border-radius: 8px;
     `;

     const StyledCard = styled(Card)`
       &:hover {
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
       }
     `;
     ```

## Installation

To use `styled-components` in your project, ensure it is installed:

```bash
npm install styled-components
