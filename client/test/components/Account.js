import { renderComponent, expect } from '../test_helper';
import Account from '../../src/components/Account';

describe('Account' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Account);
  });

  it('shows a comment header', () => {
    expect(component.find('.header')).to.exist;
  });

  it('shows a comment TradingInfo', () => {
    expect(component.find('.trading-info')).to.exist;
  });

  it('shows a comment TradingInfo', () => {
    expect(component.find('.delta-chart')).to.exist;
  });
});
