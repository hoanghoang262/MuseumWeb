function base64ToFile(base64String: string, mimeType: string = 'image/jpeg'): Blob {
    
    const base64 = base64String.split(",")[1];
    // Decode base64 string
    const byteCharacters = atob(base64);
    
    // Create an array to hold the bytes
    const byteArrays: Uint8Array[] = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    
    // Create a blob from the byte arrays
    const blob = new Blob(byteArrays, {type: mimeType});

    const file = new File([blob], "file", {type: mimeType});
    
    return file;
  }


  
  export default base64ToFile