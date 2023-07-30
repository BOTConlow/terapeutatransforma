import { styled } from "../../styles/stitches.config";


export const TemasContainer = styled('div', {

    maxWidth: '1120px',
    padding: '4rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#000',
    gap: '5rem',

})

export const SphereContent = styled('div', {

    gap: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

})

export const TemasContent = styled('div', {

    maxWidth: '46rem',
    borderRadius: 20,
    boxShadow: '0px 0px 29px 0px rgba(0,0,0,0.75)',

})

export const MolduraRec = styled('div', {

    Width: '46rem',
    height: '1.7rem',
    background: 'linear-gradient(90deg, #77B0ED, #213989)',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    borderBottomLeftRadius: '100%',
    borderBottomRightRadius: '100%',


})

export const TemasBox = styled('div', {

    padding: '3rem 2rem',
    margin: '0 auto',

})

export const BoxTitle = styled('div', {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#413F3F',
    gap: '1rem',

    h1: {
        fontSize: '1.75rem',
    }

})

export const Separator = styled('div', {

    width: '12rem',
    height: 2,
    background: '#BCBCC3',

})

export const CheckContainer = styled('div', {

    background: '#e0e0e0',
    borderRadius: '10px',
    padding: '.5rem 1rem',
    gap: '1rem',
    margin: '2rem 0',
    display: 'flex',
    alignItems: 'center',

    p: {
        width: '100%',
    }

})

export const Check = styled('div', {

    width: '2.3rem',
    height: '2.3rem',
    background: '#60B0D9',
    borderRadius: '11px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3.70px solid #B5B5BA',

})