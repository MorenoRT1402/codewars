export const validString = 'In with a chance';
export const invalidString = 'Plenty more fish in the sea';
export const validateNumber = (str: string): string => {
    const regex = /^(?:(?:\+44|0)7[\d-]{9}|(?:\+44|0)7\d{9})$/;
    const cleanNumber = str.replace(/-/g, '');
    return regex.test(cleanNumber) ? validString : invalidString;
};
