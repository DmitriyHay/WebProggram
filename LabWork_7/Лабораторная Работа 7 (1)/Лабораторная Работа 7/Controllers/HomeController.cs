using System;
using System.Net.Mail;
using System.Web.Mvc;
using PartyInvites.Models;

namespace PartyInvites.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult Index()
        {
            int hour = DateTime.Now.Hour;
            ViewBag.Greeting = hour < 12 ? "Доброе утро" : "Доброго дня";
            return View();
        }

        [HttpGet]
        public ViewResult RsvpForm()
        {
            return View();
        }

        [HttpPost]
        public ViewResult RsvpForm(GuestResponse guest)
        {
            if (ModelState.IsValid)
            {
                // Отправляем письмо на электронную почту организатора вечеринки
                MailMessage message = new MailMessage();
                message.From = new MailAddress(guest.Email);
                message.To.Add(new MailAddress("77dima53@gmail.com"));
                message.Subject = "Новый гость на вечеринке";
                message.Body = $"Имя: {guest.Name}\nEmail: {guest.Email}\nТелефон: {guest.Phone}\nПримет участие: {guest.WillAttend}";

                SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new System.Net.NetworkCredential("отправитель@gmail.com", "пароль");
                smtpClient.EnableSsl = true;
                smtpClient.Send(message);

                return View("Thanks", guest);
            }
            else
            {
                // Обнаружена ошибка проверки достоверности
                return View();
            }
        }
    }
}