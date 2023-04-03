export function truncateText(text: string = '', maxLength = 100) {
    if (text.length > maxLength) {
        const lastSpaceIndex = text.lastIndexOf(" ", maxLength);
        if (lastSpaceIndex !== -1) {
            return `${text.substring(0, lastSpaceIndex)  }...`;
        } 
            return `${text.substring(0, maxLength)  }...`;
        
    } 
        return text;
    
}
