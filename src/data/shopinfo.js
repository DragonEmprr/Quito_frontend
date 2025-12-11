export const shopAddress = process.env.REACT_APP_SHOP_ADDRESS;

export const phone = process.env.REACT_APP_PHONE_NUMBER;

export const email = process.env.REACT_APP_EMAIL_ADDRESS;

export const googleMapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  shopAddress
)}&output=embed`;

export const apiurl = process.env.REACT_APP_API_URL;