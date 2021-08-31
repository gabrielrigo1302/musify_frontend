import { makeStyles } from '@material-ui/core';
import { colors } from '../../styles'

const useStyles = makeStyles(() => ({
    root: {
        justifySelf: 'center',
        justifyContent: 'center',
        background: colors.blackBlurredDefault,
        display: 'flex',
    }
}))

export default useStyles;