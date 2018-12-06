module.exports = mongoose => {
  const Schema = mongoose.Schema
  UserSchema = new Schema({
    password: String,
    name: String,
    isAdmin: Boolean,
    meta: {
      createdAt: {
        type: Date,
        default: Date.now()
      },
      updatedAt: {
        type: Date,
        default: Date.now()
      }
    }
  })
  UserSchema.pre('save', function (next) {
    if (this.isNew) {
      this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
      this.meta.updatedAt = Date.now()
    }
    next()
  })
  return UserSchema
}
