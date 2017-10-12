export const config = {
  title: 'HoloDeck',
  Endpoints: {
    ControlStatus: 'ws://' + window.location.hostname + ':' + window.location.port + '/status',
    Main: 'http://' + window.location.hostname + ':' + window.location.port + '/'
  }
  /*Volume: {
  	Min:-6000,
  	Max: 0
  }*/
};
