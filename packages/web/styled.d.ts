// import original module declarations
import 'styled-components'
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      warning: string;
    },
    button: {
      primary: {
        bg: string;
      },
      borderRadius: string;
    }
  }
}
