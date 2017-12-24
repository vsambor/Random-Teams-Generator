const userModel = App.model('userModel')

exports.index = (req, res) => res.json({ text: "This is the index" });

exports.getAllUsers = (req, res) => {
  let users = new userModel({ name: 'test', email: 'test@test.com' })
  user.save().then(() => {
    console.log('user saved!');
  })
}
