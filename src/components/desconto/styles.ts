import { styled } from "../../styles/stitches.config";

export const DescontoContainer = styled('div', {

    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',

})

export const BoxCheck = styled('div', {

    transition: 'all 100ms ease-in-out',
    boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.50)',
    borderRadius: 20,

    '&:hover': {
        transform: 'scale(1.05)',
    },


})

export const RevisaoDesconto = styled('div', {

    maxWidth: '45rem',
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0px 0px 22px -3px rgba(0,0,0,0.75)',
    borderRadius: 35,
    transition: 'all 500ms ease',

    '&:hover': {
        transform: 'scale(1.05)',
    },

})

export const RevisaoHeadline = styled('div', {

    width: '100%',
    background: '#161528',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    padding: '2rem',

    h2: {
        fontSize: '2rem',
        color: '#fff',
        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.31)',
    },

})

export const RevisaoContent = styled('div', {

    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    padding: '3rem 0 4rem',

    h1: {
        fontSize: '3rem',
        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.31)',
    },

    p: {
        fontSize: '2rem',
        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.31)',
    }

})