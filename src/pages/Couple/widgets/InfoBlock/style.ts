import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useInfoBlockStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      padding: theme.spacing(1),
    },
    field: {
      margin: theme.spacing(1),
      flex: 1,
    },
    field_type_switch: {
      justifyContent: 'space-between',
    },
    fieldGroup: {
      margin: theme.spacing(1.5, 0),

      '&:first-child': {
        marginTop: 0,
      },
    },
    fields: {
      flexGrow: 1
    },
  }),
);
