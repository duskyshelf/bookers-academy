describe('Booker', function() {

  var user = new User()

  describe('allows users to sign in', function(){

    go to '/'
    user.sign_up
    expect(page).to have content ('herro user')

  });

  describe('allows users to sign in', function(){

    user.sign_up
    expect(Users.first).toBe(user)

  });

});