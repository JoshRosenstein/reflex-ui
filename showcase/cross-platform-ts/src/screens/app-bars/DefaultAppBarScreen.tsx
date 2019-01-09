/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AppBar,
  AppBarTitle,
  AppBarVariant,
  Button,
  ButtonVariant,
  Caption,
  ColorTheme,
  Row,
} from '@reflex-ui/core';
import { FavoriteIcon, MenuIcon } from '@reflex-ui/material-design';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('DefaultButtonScreen().onButtonPress()');
};

const DefaultAppBarScreen: React.SFC = (): JSX.Element => (
  <ScrollView>
    <Row>
      <Button
        leadingIcon={<FavoriteIcon />}
        onPress={onButtonPress}
        trailingIcon={<FavoriteIcon />}
      >
        Favorite
      </Button>
    </Row>
    <Row>
      <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
        <MenuIcon />
      </Button>
      <FavoriteIcon />
    </Row>
    <Row>
      <Caption>
        AppBarVariant.DEAFULT, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.DEAFULT, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Button onPress={onButtonPress}>Save As</Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.DEAFULT, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis
            </AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.DENSE, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar variant={AppBarVariant.DENSE}>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.PROMINENT, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT}>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle>My Application</AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.PROMINENT, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT}>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle>
              Sed ut perspiciatis unde omnis iste natus error
            </AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.PROMINENT, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT}>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium
              totam rem aperiam eaque ipsa quae ab illo inventore veritatis. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium
              totam rem aperiam eaque ipsa quae ab illo inventore veritatis. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium
              totam rem aperiam eaque ipsa quae ab illo inventore veritatis. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium
              totam rem aperiam eaque ipsa quae ab illo inventore veritatis
            </AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.PROMINENT_DENSE, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT_DENSE}>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle>My Application</AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.PROMINENT_DENSE, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT_DENSE}>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle>
              Sed ut perspiciatis unde omnis iste natus error
            </AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>AppBarVariant.DEFAULT, ColorTheme.SECONDARY_NORMAL</Caption>
    </Row>
    <Row>
      <AppBar colorTheme={ColorTheme.SECONDARY_NORMAL}>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>
              My Application Lorem Ipsum Dolor Sit Amet Consectum Lorem Ipsum
              Dolor Sit Amet Consectum Lorem Ipsum Dolor Sit Amet Consectum
            </AppBarTitle>
            <Row>
              <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
                <FavoriteIcon />
              </Button>
              <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
                <MenuIcon />
              </Button>
            </Row>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>AppBarVariant.DEFAULT, ColorTheme.SECONDARY_LIGHT</Caption>
    </Row>
    <Row>
      <AppBar colorTheme={ColorTheme.SECONDARY_LIGHT}>
        <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.DEFAULT, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar>
        <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
          <MenuIcon />
        </Button>
        <View />
        <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
          <FavoriteIcon />
        </Button>
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.DEFAULT, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar>
        <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
          <MenuIcon />
        </Button>
      </AppBar>
    </Row>
    <Row>
      <Caption>AppBarVariant.DEFAULT, ColorTheme.WARNING_NORMAL</Caption>
    </Row>
    <Row>
      <AppBar colorTheme={ColorTheme.WARNING_NORMAL}>
        {() => <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>}
      </AppBar>
    </Row>
    <Row>
      <Caption>
        AppBarVariant.PROMINENT, ColorTheme.PRIMARY_NORMAL (default)
      </Caption>
    </Row>
    <Row>
      <AppBar variant={AppBarVariant.PROMINENT}>
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <FavoriteIcon />
            </Button>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>AppBarVariant.PROMINENT, ColorTheme.SECONDARY_NORMAL</Caption>
    </Row>
    <Row>
      <AppBar
        colorTheme={ColorTheme.SECONDARY_NORMAL}
        variant={AppBarVariant.PROMINENT}
      >
        {() => (
          <React.Fragment>
            <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
              <MenuIcon />
            </Button>
            <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
            <Row>
              <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
                <FavoriteIcon />
              </Button>
              <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
                <MenuIcon />
              </Button>
            </Row>
          </React.Fragment>
        )}
      </AppBar>
    </Row>
    <Row>
      <Caption>AppBarVariant.PROMINENT, ColorTheme.SECONDARY_LIGHT</Caption>
    </Row>
    <Row>
      <AppBar
        colorTheme={ColorTheme.SECONDARY_LIGHT}
        variant={AppBarVariant.PROMINENT}
      >
        <Button onPress={onButtonPress} variant={ButtonVariant.ICON}>
          <MenuIcon />
        </Button>
        <AppBarTitle numberOfLines={1}>My Application</AppBarTitle>
      </AppBar>
    </Row>
  </ScrollView>
);

DefaultAppBarScreen.displayName = 'DefaultAppBarScreen';

export { DefaultAppBarScreen };
