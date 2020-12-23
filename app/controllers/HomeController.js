

module.exports = {

  /**
   * Simple Controller that handle json as response
   */
  home(req, res) {

    user = {
      first_name: 'Abdurozzaq',
      last_name: 'Nurul Hadi'
    }

    res.send(user);
  }
}