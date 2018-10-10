/*
Module with useful utilites
*/

const Utils = {
    properCase: (s) => {
        const result = [];
        const re = /([^\s-/]+)([\s-/]*)/ig;
        let words = re.exec(s);
        while (words !== null) {
            const w = words[1];
            result.push(`${w.substr(0, 1).toUpperCase()}${w.length > 1 ? w.substr(1).toLowerCase() : ''}`);
            if (words[2] !== '') {
                let prev = '';
                let delimeter = '';
                for (let i = 0; i < words[2].length; i += 1) {
                    if (words[2].substr(i, 1) !== prev) {
                        prev = words[2].substr(i, 1);
                        delimeter += prev;
                    }
                }
                result.push(`${delimeter}`);
            }
            words = re.exec(s);
        }
        return result.join('');
    },
};

export default Utils;
