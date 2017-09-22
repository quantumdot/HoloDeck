export const config = {
  title: 'Hello World',
  Endpoints: {
    ControlStatus: 'ws://' + window.location.hostname + ':' + window.location.port + '/status',
    Main: 'http://' + window.location.hostname + ':' + window.location.port + '/'
  }
};
