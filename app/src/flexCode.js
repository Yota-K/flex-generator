export const styleGenerate = (
    flex, 
    flexDirection, 
    flexWrap, 
    justifyContent, 
    alignItems, 
    alignContent,
) => {
    return `display: ${flex};
flex-direction: ${flexDirection};
flex-wrap: ${flexWrap};
justify-content: ${justifyContent};
align-items: ${alignItems};
align-content: ${alignContent};`
}
