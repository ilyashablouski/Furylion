import React, { useEffect, useRef, useState } from 'react';
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
    isSentSuccess?: boolean;
  };

function AttachFile({
  isSmall,
  isFeedback,
  isSentSuccess,
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

  //TODO:Clear when request is success
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
          // accept=".doc,.pdf,.docx,.txt"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <InputLabel htmlFor="attach-file" />

        <Content>
          {isLoadingFile ? (
            <Spinner color={'red'} />
          ) : file ? (
            <FileName>{file.name}</FileName>
          ) : (
            <Description>+Add file</Description>
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
  min-height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Description = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  color: ${colors.white};

  span {
    color: ${colors.red};
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: all 150ms linear;
  }
`;

const FileName = styled.span`
  display: block;
  max-width: 318px;
  text-align: center;
  font-weight: 500;
  font-size: 21px;
  color: ${colors.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.mobile576(css`
    max-width: 220px;
  `)}
`;

const ClearFileButton = styled.button`
  position: absolute;
  top: 50%;
  right: 30px;
  display: inline-flex;
  color: ${colors.white};
  transform: translateY(-50%);
  transition: all 150ms linear;
  z-index: 10;

  ${media.mobile576(
    css`
      right: 15px;
    `
  )}

  &:hover {
    color: ${colors.red};
  }
`;

const Component = styled.div<{ isSmall?: boolean; isFeedback?: boolean }>`
  position: relative;
  border: 1px dashed rgba(255, 255, 255, 0.5);
  transition: all 0.15s linear;

  &:hover,
  &:focus {
    border-color: ${colors.red};
    background: rgba(0, 0, 0, 0.1);

    ${Description} {
      span {
        text-decoration-color: ${colors.red};
      }
    }
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: auto;
  right: auto;
  display: block;
  width: 100%;
  font-size: 11px;
  line-height: 15px;
  color: ${colors.red};
  margin-top: 8px;
`;

export default AttachFile;
