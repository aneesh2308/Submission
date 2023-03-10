import LoadingButton from '@mui/lab/LoadingButton';
export default function CustomButton(props){
    return (
        <LoadingButton
        {...props}
        type="submit"
        loading={props.loading}
        variant="contained"
      >
        {props.name}
      </LoadingButton>
    );
}