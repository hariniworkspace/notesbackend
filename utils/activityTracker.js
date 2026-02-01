export const updateActivity = async (user) => {
  const today = new Date().toISOString().slice(0, 10);

  const log = user.activityLog.find((d) => d.date === today);

  if (log) {
    log.count += 1;
  } else {
    user.activityLog.push({ date: today, count: 1 });
  }

  // streak logic
  if (!user.lastActiveDate) {
    user.streak = 1;
  } else {
    const yesterday = new Date(Date.now() - 86400000)
      .toISOString()
      .slice(0, 10);

    if (user.lastActiveDate === yesterday) {
      user.streak += 1;
    } else if (user.lastActiveDate !== today) {
      user.streak = 1;
    }
  }

  user.lastActiveDate = today;
  user.bestStreak = Math.max(user.bestStreak, user.streak);

  await user.save();
};
