import { FunctionComponent } from 'react'
import { LoadingContainer } from './loading.styles';
import { SyncLoader } from 'react-spinners';

interface LoadingProps{
    message?: string
}

const Loading: FunctionComponent<LoadingProps> = ({message}) => {
    return ( 
        <LoadingContainer>
            {message && <p>{message}</p>}
            <SyncLoader size={20}/>
        </LoadingContainer>
    );
}
 
export default Loading;