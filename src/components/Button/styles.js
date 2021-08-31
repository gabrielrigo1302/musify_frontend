import { makeStyles } from '@material-ui/core';
import { colors, fonts } from '../../styles'

const useStyles = makeStyles({
    button: ({buttonCustomStyle}) => (
        buttonCustomStyle !== null ?
        buttonCustomStyle :
        {
            borderRadius: '25px',
            background: `linear-gradient(to bottom right, ${colors.greenDefault}, ${colors.blackDefault})`,
            width: '50%',
            letterSpacing: '5px'
        }
    ),

    text: ({fontCustomStyle}) => (
        fontCustomStyle !== null ?
        fontCustomStyle :
        {
            fontSize: '18px',
            fontFamily: fonts.fontDefault,
            color: colors.whiteDefault,
        }
    )
})

export default useStyles;