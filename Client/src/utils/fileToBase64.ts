function fileToBase64(file: File): Promise<string | null> {
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const result = event.target?.result as string | null;
            const base64String = result ? result.split(",")[1] : null;
            resolve("data:image/jpeg;base64,"+base64String);
        };

        reader.readAsDataURL(file);
    });
}

export default fileToBase64