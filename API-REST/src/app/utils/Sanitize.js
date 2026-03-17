class Sanitize {
    // Sanitiza o input para evitar sql injection
    text(value){
        if (typeof value !== 'string') return null;
        
        return value
        .trim()
        .replace(/[<>]/g, '');
    }
}

export default new Sanitize()