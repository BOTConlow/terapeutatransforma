import { CaretDown } from 'phosphor-react'
import { styled } from '../../styles/stitches.config'
import * as Accordion from '@radix-ui/react-accordion'
import { keyframes } from '@stitches/react'

export const AccordionRoot = styled(Accordion.Root, {
  borderRadius: 6,
  width: 500,
  backgroundColor: 'red',
  boxShadow: `0 2px 10px #000`,
})

export const AccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px #000`,
  },
})

export const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
})

export const StyledTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1rem',
  lineHeight: 1,
  color: '#fff',
  boxShadow: `0 1px 0 #000`,
  '&:hover': { backgroundColor: 'blue' },
})

export const StyledChevron = styled(CaretDown, {
  color: '#fff',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

export const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: '#000',
  backgroundColor: '#fff',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

export const StyledContentText = styled('div', {
  padding: '15px 20px',
})
