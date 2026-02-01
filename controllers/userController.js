export const getProfile = async (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    createdAt: req.user.createdAt,
    streak: req.user.streak,
    bestStreak: req.user.bestStreak,
    activityLog: req.user.activityLog,
  });
};
