import { HOME_ROUTE } from './home.route';
import { Route } from '@angular/router';

describe('HOME_ROUTE', () => {
  let homeRoute: Route;

  beforeEach(() => {
    homeRoute = HOME_ROUTE;
  });

  it('should create an route instance', () => {
    expect(homeRoute).toBeTruthy();
  });
  it('should have empty path', () => {
    expect(homeRoute.path).not.toBeNull();
    expect(homeRoute.path).toEqual('');
  });
  it('should have home component', () => {
    expect(homeRoute.component).not.toBeNull();
  });
});
