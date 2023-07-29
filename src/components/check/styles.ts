import { styled } from "../../styles/stitches.config";

export const CheckContainer = styled('div', {

    Width: '40rem',
    background: '#e0e0e0',
    color: '#000',
    borderRadius: '10px',
    padding: '.5rem 1rem',
    gap: '1rem',
    margin: '2rem 0',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 100ms ease-in-out',
    boxShadow: '10px 10px 25px 0px rgba(0, 0, 0, 0.31)',

    '&:hover': {
        transform: 'scale(1.05)',
    },

    p: {
        width: '100%',
    }

})

export const CheckContent = styled('div', {

    width: '2.3rem',
    height: '2.3rem',
    background: '#60B0D9',
    borderRadius: '11px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3.70px solid #B5B5BA',

})
