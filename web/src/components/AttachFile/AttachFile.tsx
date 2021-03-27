import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { FieldConfig, useField } from 'formik';

import { Nullable } from '@tager/web-core';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg';
import { uploadFile } from '@/services/requests';
import TextInput from '@/components/TextInput/TextInput';

import Spinner from '../Spinner';

type FormikFieldProps = Pick<FieldConfig, 'name' | 'type'>;
type InputProps = Omit<React.ComponentProps<typeof TextInput>, 'name' | 'type'>;

type Props = FormikFieldProps &
  InputProps & {
    isSmall?: boolean;
    fileId: number;
    setFileId: (value: number) => void;
    error?: string;
    isFeedback?: boolean;
  };

function AttachFile({
  isSmall,
  isFeedback,
  fileId,
  setFileId,
  error: customError,
  name = 'fileId',
  type = 'file',
}: Props) {
  const [file, setFile] = useState<Nullable<File>>(null);
  const [isLoadingFile, setIsLoadingFile] = useState<boolean>(false);
  const [isLoadedFile, setIsLoadedFile] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [field, meta, helpers] = useField<string>({ name, type });
  const error = customError ?? (meta.touched ? meta.error : '');

  function clearFile(event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (event) {
      event.preventDefault();
    }
    setFile(null);
    setFileId(0);
    setIsLoadedFile(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;
    if (!fileList || fileList.length === 0) return;
    const fileItem = fileList.item(0);
    if (!fileItem) return;
    setFile(fileItem);
    setIsLoadingFile(true);
    return uploadFile(fileItem).then((res) => {
      setFileId(res.id);
      setTimeout(() => {
        setIsLoadingFile(false);
        setIsLoadedFile(true);
      }, 500);
    });
  }

  return (
    <Component isSmall={isSmall} isFeedback={isFeedback}>
      <Inner>
        <InputFile
          id="attach-file"
          type={'file'}
          name={'file'}
          accept=".doc,.pdf,.docx"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <InputLabel htmlFor="attach-file" />

        <Content>
          {isLoadingFile ? (
            <Spinner color={'white'} />
          ) : file ? (
            <FileName>{file.name}</FileName>
          ) : (
            <Description>
              Перетащите сюда файл с резюме или <span>загрузите</span> его с
              компьютера (до 5 Мб)
            </Description>
          )}
          {file && !isLoadingFile ? (
            <ClearFileButton onClick={clearFile}>
              <CloseIcon />
            </ClearFileButton>
          ) : null}
        </Content>
      </Inner>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </Component>
  );
}

const Inner = styled.div`
  padding: 58px 0;
  min-height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${media.laptop(css`
    padding: 48px 0;
    min-height: 160px;
  `)}
`;

const Content = styled.div``;

const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const InputLabel = styled.label`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
`;

const Description = styled.p`
  text-align: center;
  max-width: 640px;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: ${colors.black};

  span {
    color: ${colors.red};
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: all 0.3s linear;
  }

  ${media.laptop(css`
    max-width: 480px;
    font-size: 24px;
    line-height: 32px;
  `)}
`;

const FileName = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: ${colors.black};

  ${media.laptop(css`
    max-width: 480px;
    font-size: 24px;
    line-height: 32px;
  `)}
`;

const ClearFileButton = styled.button`
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  transition: all 0.3s linear;
  z-index: 10;

  ${media.laptop(css`
    svg {
      width: 15px;
      height: 15px;
    }
  `)}

  &:hover {
    opacity: 0.7;
  }
`;

const Component = styled.div<{ isSmall?: boolean; isFeedback?: boolean }>`
  position: relative;
  border: 2px dotted ${colors.black};
  transition: all 0.3s linear;

  &:hover,
  &:focus {
    border-color: transparent;
    background: rgba(0, 0, 0, 0.1);

    ${Description} {
      span {
        text-decoration-color: ${colors.red};
      }
    }
  }

  ${(props) =>
    props.isSmall
      ? css`
          ${Inner} {
            padding: 31px 0;
            min-height: 116px;

            ${media.laptop(css`
              padding: 32px 0;
            `)}
          }

          ${Description} {
            max-width: 400px;
            font-size: 20px;
            line-height: 26px;

            ${media.laptop(css`
              max-width: 320px;
              font-size: 16px;
              line-height: 24px;
            `)}
          }

          ${FileName} {
            max-width: 400px;
            font-size: 20px;
            line-height: 26px;

            ${media.laptop(css`
              max-width: 320px;
              font-size: 16px;
              line-height: 24px;
            `)}
          }

          ${ClearFileButton} {
            svg {
              width: 15px;
              height: 15px;
            }
            ${media.laptop(css`
              svg {
                width: 12px;
                height: 12px;
              }
            `)}
          }
        `
      : ''}

  ${(props) =>
    props.isFeedback
      ? css`
          ${Inner} {
            min-height: 168px;

            ${media.laptop(css`
              min-height: 120px;
            `)}
          }
        `
      : ''}
`;

const ErrorMessage = styled.span`
  position: absolute;
  right: 0;
  display: block;
  font-size: 11px;
  line-height: 15px;
  color: ${colors.red};
  text-align: right;
  margin-top: 8px;
`;

export default AttachFile;
