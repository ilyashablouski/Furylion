import styled, { css } from 'styled-components';

import { colors, fonts } from '@/constants/theme';
import { media } from '@/utils/mixin';

function getBorderColor(
  props: { invalid?: boolean; active?: boolean } = {}
): string {
  return props.invalid
    ? colors.red
    : props.active
    ? colors.black
    : colors.black100;
}

export const TextArea = styled.textarea<{
  invalid?: boolean;
}>`
  width: 100%;
  height: 37px;
  max-height: 300px;
  font-weight: 400;
  font-size: 21px;
  line-height: 100%;
  background: transparent;
  resize: none;
  border: none;
  border-bottom: 1.77px solid ${colors.white};
  color: ${colors.white};

  overflow-y: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 0.375rem;

    &-track {
      background-color: transparent;
    }

    &-thumb {
      background-color: ${colors.red};
      opacity: 0.85;

      &:hover {
        background-color: ${colors.red};
        opacity: 1;
      }
    }
  }

  &::placeholder {
    color: ${colors.white};
    transition: all 150ms ease-in-out;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
