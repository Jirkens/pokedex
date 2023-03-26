import { ChangeEvent, FC, FormEvent } from 'react';
import { IconButton, InputBase, Paper, styled } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

const FormPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  width: '400px',
  alignItems: 'center',
  alignSelf: 'center',
  boxShadow: 'none',
  marginBottom: theme.spacing(12),
  padding: theme.spacing(1),

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(6),
    width: '280px',
  },
})) as typeof Paper;


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(5),
  flex: 1,

  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
}));

interface ISearchInputProps {
  searchText: string;
  placeholder?: string;
  handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleOnClickClearButton: () => void;
}

export const SearchInput: FC<ISearchInputProps> = ({
  searchText,
  placeholder = 'Type search text',
  handleOnSubmit,
  handleSearchInputChange,
  handleOnClickClearButton,
}) => {
  return (
    <FormPaper
      component="form"
      onSubmit={handleOnSubmit}
    >
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
      <StyledInputBase
        placeholder={placeholder}
        onChange={handleSearchInputChange}
        value={searchText}
      />
      <IconButton type="button" disabled={!searchText} onClick={handleOnClickClearButton}>
        <ClearIcon />
      </IconButton>
    </FormPaper>
  );
};
