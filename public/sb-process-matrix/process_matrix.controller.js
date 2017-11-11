/**
 * Main component controller
 */
class ProcessMatrixController {

  constructor () {
    console.log('ProcessMatrixController');
  }

  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */
  $onInit () {
    console.log('input bindings are defined!', this.sbModel);
  }

  formatDate(stamp) {
    const date = new Date(stamp);
    return date.toString().split(' ').slice(0, 4).join(' ');
  }
}

export { ProcessMatrixController }