'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vittori/Desktop/Projects/biots/ETH/EthereumCasts/VotingApp/components/ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.giveRightToVote(_this.state.value).send({
                  from: accounts[0]
                });

              case 9:

                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:

                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Invite voter'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'address',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Invite!'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImdpdmVSaWdodFRvVm90ZSIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwidDAiLCJtZXNzYWdlIiwic3RvcCIsIl94Iiwia2V5IiwicmVuZGVyIiwiX3RoaXMzIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJGaWVsZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwiaGVhZGVyIiwiY29udGVudCIsInByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLGdHQUFuQjs7O0FBT0EsSUFBSUMsaUJBQWlCLFVBQVVDLFVBQVYsRUFBc0I7QUFDekMsMEJBQVVELGNBQVYsRUFBMEJDLFVBQTFCOztBQUVBLFdBQVNELGNBQVQsR0FBMEI7QUFDeEIsUUFBSUUsSUFBSjtBQUFBLFFBQ0lDLFNBQVMsSUFEYjs7QUFHQSxRQUFJQyxLQUFKLEVBQVdDLEtBQVgsRUFBa0JDLElBQWxCOztBQUVBLGtDQUFnQixJQUFoQixFQUFzQk4sY0FBdEI7O0FBRUEsU0FBSyxJQUFJTyxPQUFPQyxVQUFVQyxNQUFyQixFQUE2QkMsT0FBT0MsTUFBTUosSUFBTixDQUFwQyxFQUFpREssT0FBTyxDQUE3RCxFQUFnRUEsT0FBT0wsSUFBdkUsRUFBNkVLLE1BQTdFLEVBQXFGO0FBQ25GRixXQUFLRSxJQUFMLElBQWFKLFVBQVVJLElBQVYsQ0FBYjtBQUNEOztBQUVELFdBQU9OLFFBQVFGLFNBQVNDLFFBQVEseUNBQTJCLElBQTNCLEVBQWlDLENBQUNILE9BQU9GLGVBQWVhLFNBQWYsSUFBNEIsOEJBQXVCYixjQUF2QixDQUFwQyxFQUE0RWMsSUFBNUUsQ0FBaUZDLEtBQWpGLENBQXVGYixJQUF2RixFQUE2RixDQUFDLElBQUQsRUFBT2MsTUFBUCxDQUFjTixJQUFkLENBQTdGLENBQWpDLENBQVIsRUFBNkpMLEtBQXRLLEdBQThLQSxNQUFNWSxLQUFOLEdBQWM7QUFDek1DLGFBQU8sRUFEa007QUFFek1DLG9CQUFjLEVBRjJMO0FBR3pNQyxlQUFTO0FBSGdNLEtBQTVMLEVBSVpmLE1BQU1nQixRQUFOLEdBQWlCLFlBQVk7QUFDOUIsVUFBSUMsUUFBUSxpQ0FBbUIsYUFBYSxzQkFBb0JDLElBQXBCLENBQXlCLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQzNGLFlBQUlDLFFBQUosRUFBY0MsUUFBZDtBQUNBLGVBQU8sc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUMxRCxpQkFBTyxDQUFQLEVBQVU7QUFDUixvQkFBUUEsU0FBU0MsSUFBVCxHQUFnQkQsU0FBU0UsSUFBakM7QUFDRSxtQkFBSyxDQUFMO0FBQ0VQLHNCQUFNUSxjQUFOOztBQUVBUCwyQkFBVyx3QkFBU3JCLE1BQU02QixLQUFOLENBQVlDLE9BQXJCLENBQVg7O0FBR0E5QixzQkFBTStCLFFBQU4sQ0FBZSxFQUFFaEIsU0FBUyxJQUFYLEVBQWlCRCxjQUFjLEVBQS9CLEVBQWY7O0FBRUFXLHlCQUFTQyxJQUFULEdBQWdCLENBQWhCO0FBQ0FELHlCQUFTRSxJQUFULEdBQWdCLENBQWhCO0FBQ0EsdUJBQU8sY0FBS0ssR0FBTCxDQUFTQyxXQUFULEVBQVA7O0FBRUYsbUJBQUssQ0FBTDtBQUNFWCwyQkFBV0csU0FBU1MsSUFBcEI7QUFDQVQseUJBQVNFLElBQVQsR0FBZ0IsQ0FBaEI7QUFDQSx1QkFBT04sU0FBU2MsT0FBVCxDQUFpQkMsZUFBakIsQ0FBaUNwQyxNQUFNWSxLQUFOLENBQVlDLEtBQTdDLEVBQW9Ed0IsSUFBcEQsQ0FBeUQ7QUFDOURDLHdCQUFNaEIsU0FBUyxDQUFUO0FBRHdELGlCQUF6RCxDQUFQOztBQUlGLG1CQUFLLENBQUw7O0FBRUUsK0JBQU9pQixZQUFQLENBQW9CLGdCQUFnQnZDLE1BQU02QixLQUFOLENBQVlDLE9BQWhEO0FBQ0FMLHlCQUFTRSxJQUFULEdBQWdCLEVBQWhCO0FBQ0E7O0FBRUYsbUJBQUssRUFBTDtBQUNFRix5QkFBU0MsSUFBVCxHQUFnQixFQUFoQjtBQUNBRCx5QkFBU2UsRUFBVCxHQUFjZixTQUFTLE9BQVQsRUFBa0IsQ0FBbEIsQ0FBZDs7QUFFQXpCLHNCQUFNK0IsUUFBTixDQUFlLEVBQUVqQixjQUFjVyxTQUFTZSxFQUFULENBQVlDLE9BQTVCLEVBQWY7O0FBRUYsbUJBQUssRUFBTDs7QUFFRXpDLHNCQUFNK0IsUUFBTixDQUFlLEVBQUVoQixTQUFTLEtBQVgsRUFBa0JGLE9BQU8sRUFBekIsRUFBZjs7QUFFRixtQkFBSyxFQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPWSxTQUFTaUIsSUFBVCxFQUFQO0FBdENKO0FBd0NEO0FBQ0YsU0EzQ00sRUEyQ0p2QixPQTNDSSxFQTJDS3JCLE1BM0NMLEVBMkNhLENBQUMsQ0FBQyxDQUFELEVBQUksRUFBSixDQUFELENBM0NiLENBQVA7QUE0Q0QsT0E5QzJDLENBQWhDLENBQVo7O0FBZ0RBLGFBQU8sVUFBVTZDLEVBQVYsRUFBYztBQUNuQixlQUFPMUIsTUFBTVAsS0FBTixDQUFZLElBQVosRUFBa0JQLFNBQWxCLENBQVA7QUFDRCxPQUZEO0FBR0QsS0FwRG1CLEVBSkwsRUF3RFZKLEtBeERFLEdBd0RNLHlDQUEyQkMsS0FBM0IsRUFBa0NDLElBQWxDLENBeERiO0FBeUREOztBQUVELDZCQUFhTixjQUFiLEVBQTZCLENBQUM7QUFDNUJpRCxTQUFLLFFBRHVCO0FBRTVCL0IsV0FBTyxTQUFTZ0MsTUFBVCxHQUFrQjtBQUN2QixVQUFJQyxTQUFTLElBQWI7O0FBRUEsYUFBTyxnQkFBTUMsYUFBTix3QkFFTCxFQUFFL0IsVUFBVSxLQUFLQSxRQUFqQixFQUEyQmdDLE9BQU8sQ0FBQyxDQUFDLEtBQUtwQyxLQUFMLENBQVdFLFlBQS9DLEVBQTZEbUMsVUFBVTtBQUNuRUMsb0JBQVV4RCxZQUR5RDtBQUVuRXlELHNCQUFZO0FBRnVEO0FBQXZFLE9BRkssRUFPTCxnQkFBTUosYUFBTixDQUNFLHNCQUFLSyxLQURQLEVBRUU7QUFDRUgsa0JBQVU7QUFDUkMsb0JBQVV4RCxZQURGO0FBRVJ5RCxzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLGdCQUFNSixhQUFOLENBQ0UsT0FERixFQUVFO0FBQ0VFLGtCQUFVO0FBQ1JDLG9CQUFVeEQsWUFERjtBQUVSeUQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxjQVJGLENBUkYsRUFrQkUsZ0JBQU1KLGFBQU4seUJBQTJCO0FBQ3pCbEMsZUFBTyxLQUFLRCxLQUFMLENBQVdDLEtBRE87QUFFekJ3QyxrQkFBVSxTQUFTQSxRQUFULENBQWtCakMsS0FBbEIsRUFBeUI7QUFDakMsaUJBQU8wQixPQUFPZixRQUFQLENBQWdCLEVBQUVsQixPQUFPTyxNQUFNa0MsTUFBTixDQUFhekMsS0FBdEIsRUFBaEIsQ0FBUDtBQUNELFNBSndCO0FBS3pCMEMsZUFBTyxTQUxrQjtBQU16QkMsdUJBQWUsT0FOVTtBQU96QlAsa0JBQVU7QUFDUkMsb0JBQVV4RCxZQURGO0FBRVJ5RCxzQkFBWTtBQUZKO0FBUGUsT0FBM0IsQ0FsQkYsQ0FQSyxFQXNDTCxnQkFBTUosYUFBTiwyQkFBNkIsRUFBRUMsT0FBTyxJQUFULEVBQWVTLFFBQVEsT0FBdkIsRUFBZ0NDLFNBQVMsS0FBSzlDLEtBQUwsQ0FBV0UsWUFBcEQsRUFBa0VtQyxVQUFVO0FBQ3JHQyxvQkFBVXhELFlBRDJGO0FBRXJHeUQsc0JBQVk7QUFGeUY7QUFBNUUsT0FBN0IsQ0F0Q0ssRUEyQ0wsZ0JBQU1KLGFBQU4sMEJBRUUsRUFBRVksU0FBUyxJQUFYLEVBQWlCNUMsU0FBUyxLQUFLSCxLQUFMLENBQVdHLE9BQXJDLEVBQThDa0MsVUFBVTtBQUNwREMsb0JBQVV4RCxZQUQwQztBQUVwRHlELHNCQUFZO0FBRndDO0FBQXhELE9BRkYsRUFPRSxTQVBGLENBM0NLLENBQVA7QUFxREQ7QUExRDJCLEdBQUQsQ0FBN0I7O0FBNkRBLFNBQU94RCxjQUFQO0FBQ0QsQ0F4SW9CLGtCQUFyQjs7a0JBMEllQSxjIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnL1VzZXJzL3ZpdHRvcmkvRGVza3RvcC9Qcm9qZWN0cy9iaW90cy9FVEgvRXRoZXJldW1DYXN0cy9Wb3RpbmdBcHAvY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbnZhciBDb250cmlidXRlRm9ybSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb250cmlidXRlRm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29udHJpYnV0ZUZvcm0oKSB7XG4gICAgdmFyIF9yZWYsXG4gICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyaWJ1dGVGb3JtKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBDb250cmlidXRlRm9ybS5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihDb250cmlidXRlRm9ybSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSwgX3RoaXMub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGV2ZW50KSB7XG4gICAgICAgIHZhciBjYW1wYWlnbiwgYWNjb3VudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNhbXBhaWduID0gQ2FtcGFpZ24oX3RoaXMucHJvcHMuYWRkcmVzcyk7XG5cblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcblxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAzO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuZ2l2ZVJpZ2h0VG9Wb3RlKF90aGlzLnN0YXRlLnZhbHVlKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA5OlxuXG4gICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZSgnL2NhbXBhaWducy8nICsgX3RoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEyO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbJ2NhdGNoJ10oMyk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogX2NvbnRleHQudDAubWVzc2FnZSB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE1OlxuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgdmFsdWU6ICcnIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIF90aGlzMiwgW1szLCAxMl1dKTtcbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfeCkge1xuICAgICAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSgpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb250cmlidXRlRm9ybSwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEZvcm0sXG4gICAgICAgIHsgb25TdWJtaXQ6IHRoaXMub25TdWJtaXQsIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEZvcm0uRmllbGQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdJbnZpdGUgdm90ZXInXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYWJlbDogJ2FkZHJlc3MnLFxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlLCB7IGVycm9yOiB0cnVlLCBoZWFkZXI6ICdPb3BzIScsIGNvbnRlbnQ6IHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDUwXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgeyBwcmltYXJ5OiB0cnVlLCBsb2FkaW5nOiB0aGlzLnN0YXRlLmxvYWRpbmcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDUxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnSW52aXRlISdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udHJpYnV0ZUZvcm07XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImdpdmVSaWdodFRvVm90ZSIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwidDAiLCJtZXNzYWdlIiwic3RvcCIsIl94Iiwia2V5IiwicmVuZGVyIiwiX3RoaXMzIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJGaWVsZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwiaGVhZGVyIiwiY29udGVudCIsInByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLGdHQUFuQjs7O0FBT0EsSUFBSUMsaUJBQWlCLFVBQVVDLFVBQVYsRUFBc0I7QUFDekMsMEJBQVVELGNBQVYsRUFBMEJDLFVBQTFCOztBQUVBLFdBQVNE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