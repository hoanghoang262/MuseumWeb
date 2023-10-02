function hasNullOrUndefinedValues(formData : FormData): boolean {
    for (const pair of formData.entries()) {
        const value = pair[1];
        if (value === null || value === undefined || value === "") {
            return true;
        }
    }
    return false;
}

export default hasNullOrUndefinedValues