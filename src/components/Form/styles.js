import { makeStyles } from '@material-ui/core';
import { colors } from '../../styles'

const useStyles = makeStyles(() => ({
    form: ({formCustomStyle}) => (
        formCustomStyle !== null ?
        formCustomStyle :
        {
            width: '50vw',
            height: '100vh',
            alignSelf: 'center',
            justifySelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            background: colors.blackDefault,
            display: 'flex',
        }
    )
}))

export default useStyles;