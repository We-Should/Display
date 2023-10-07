const base = {
  paddingLarge: '3rem',
  paddingMedium: '1rem',
  paddingSmall: '0.5rem',
  fontFamily: "'AR One Sans', sans-serif",
  fontSize: "2",
  lineHeight: "1.5",
}

const dark = {
  default: {
    primaryColor: '#F40E98',
    secondaryColor: '#02F0FF',
    backgroundColor: '#231246',
    headingColor: '#fff',
    textColor: '#f1f1f1',
  },
  contrast: {
    primaryColor: '#FFF',
    secondaryColor: '#42257E',
    backgroundColor: '#FFF',
    headingColor: '#311A5F',
    textColor: '#231246',
  },
  alt: {
    backgroundColor: '#311A5F',
  },
}

export const weShould = {
  light: {
    ...base,
    ...dark, // TODO: should become light
  },
  dark: {
    ...base,
    ...dark,
  },
};

export default weShould;