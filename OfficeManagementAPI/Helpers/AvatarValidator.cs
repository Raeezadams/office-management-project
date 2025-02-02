namespace OfficeManagementAPI.Helpers
{
    public static class AvatarValidator
    {
        public static bool IsAvatarValid(string avatar)
        {
            var validAvatars = new List<string>
            {
                "Avatar1.png", "Avatar2.png", "Avatar3.png",
                "Avatar4.png", "Avatar5.png", "Avatar6.png",
                "Avatar7.png", "Default.png"
            };

            return validAvatars.Contains(avatar);
        }
    }
}
