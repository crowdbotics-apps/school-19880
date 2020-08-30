import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile95488Navigator from '../features/UserProfile95488/navigator';
import Settings95487Navigator from '../features/Settings95487/navigator';
import Settings95485Navigator from '../features/Settings95485/navigator';
import SignIn295483Navigator from '../features/SignIn295483/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile95488: { screen: UserProfile95488Navigator },
Settings95487: { screen: Settings95487Navigator },
Settings95485: { screen: Settings95485Navigator },
SignIn295483: { screen: SignIn295483Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
