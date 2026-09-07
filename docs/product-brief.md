1. Opis | Description

PL:
Gatherly to aplikacja przeznaczona dla osób, które organizują wspólne podróże, wyjazdy i wakacje ze znajomymi lub rodziną.

Obecnie informacje dotyczące wyjazdu są często rozproszone między wiadomościami, notatkami i papierowymi listami. Uczestnikom trudno sprawdzić, kto odpowiada za konkretne zadanie, co zostało już zrobione, ile pieniędzy wydano oraz jakie są terminy. Prowadzi to do nieporozumień, przeoczonych informacji i niewykonanych zadań.

W Gatherly użytkownicy będą mogli wspólnie zarządzać wydatkami, checklistami i zadaniami oraz zapraszać innych uczestników do konkretnego wyjazdu.

Najważniejszą wartością aplikacji będzie stworzenie jednego centralnego miejsca zawierającego wszystkie informacje potrzebne do zorganizowania wyjazdu.

EN:
Gatherly is an app for people who organise group trips and holidays with their friends or family.

Currently, information about a trip is often scattered across messages, notes and paper checklists. It can be difficult for participants to keep track of completed tasks, expenses, deadlines and individual responsibilities. As a result, important information may be missed and some tasks may not be completed.

Gatherly allows users to manage expenses, checklists and tasks together, as well as invite other participants to join a trip.

The main value of the application is that it provides one central place for all the information needed to organise and manage a trip.

## 2. Zakres MVP | MVP scope

### Główny scenariusz użytkownika

Użytkownik zakłada konto, tworzy wyjazd i zaprasza jego uczestników.
Grupa może dodawać zadania, przypisywać osoby odpowiedzialne za ich
wykonanie oraz zapisywać wydatki. Każdy uczestnik może sprawdzić,
co zostało zrobione, co jeszcze wymaga działania i ile dotychczas wydano.

### Funkcje MVP | MVP features

1. Rejestracja, logowanie i wylogowanie | Registration, login and logout

Użytkownik może utworzyć konto, podając nazwę, adres e-mail i hasło.
Może zalogować się na swoje konto i wylogować się z aplikacji.

2. Zarządzanie wyjazdami | Trip management

Użytkownik widzi listę wyjazdów, które utworzył lub do których dołączył.
Może utworzyć wyjazd, podając nazwę, miejsce docelowe, datę rozpoczęcia
i zakończenia oraz opcjonalny opis.
Może otworzyć szczegóły wyjazdu. Właściciel może go edytować i usunąć.
Usunięcie wymaga potwierdzenia i usuwa również zadania oraz wydatki wyjazdu.

3. Uczestnicy i zaproszenia | Participants and invitations

Właściciel może wygenerować link zaproszenia i samodzielnie przekazać go
znajomym. Osoba otwierająca link musi zalogować się lub zarejestrować,
a następnie potwierdzić dołączenie do wyjazdu.
Uczestnicy widzą listę osób należących do wyjazdu.
Właściciel może unieważnić link, aby zablokować kolejne dołączenia.

4. Role i uprawnienia | Roles and permissions

Aplikacja posiada dwie role w ramach wyjazdu: właściciel i uczestnik.
Twórca wyjazdu automatycznie zostaje jego właścicielem.
Właściciel zarządza danymi wyjazdu i zaproszeniami.
Wszyscy uczestnicy mogą przeglądać informacje o wyjeździe oraz korzystać
z zadań i wydatków zgodnie z zasadami opisanymi poniżej.
Osoby spoza wyjazdu nie mają dostępu do jego danych.

5. Zadania | Tasks

Każdy uczestnik może dodać zadanie z tytułem, opcjonalnym opisem
i opcjonalnym terminem wykonania.
Zadanie może być przypisane do jednej osoby należącej do wyjazdu
lub pozostać nieprzypisane.
Dostępne statusy to „Do zrobienia” i „Zrobione”.
Każdy uczestnik może edytować zadania, zmieniać ich przypisanie
i oznaczać je jako wykonane.
Zadanie może usunąć jego autor lub właściciel wyjazdu.
Lista zadań pełni również funkcję wspólnej checklisty.

6. Rejestrowanie wydatków | Expense tracking

Każdy uczestnik może dodać wydatek, podając nazwę, kwotę większą od zera,
datę oraz osobę z wyjazdu, która zapłaciła.
Wydatek może edytować lub usunąć jego autor albo właściciel wyjazdu.
Pierwsza wersja obsługuje wyłącznie PLN.

7. Podsumowanie wydatków | Expense summary

Uczestnicy widzą listę wydatków, ich łączną kwotę oraz sumę kwot
zapłaconych przez każdą osobę.
Podsumowanie pokazuje, kto ile zapłacił, ale nie oblicza,
kto komu powinien oddać pieniądze.

### Funkcje na później | Future features

- Edycja profilu użytkownika | User profile editing
- Usuwanie uczestników i opuszczanie wyjazdu | Removing participants and leaving a trip
- Osobne checklisty, np. lista rzeczy do spakowania | Separate checklists
- Podział wydatków i rozliczenia między uczestnikami | Expense splitting and settlements
- Obsługa wielu walut | Multiple currencies
- Plan podróży podzielony na dni | Daily itinerary
- Komentarze | Comments
- Czat | Chat
- Głosowania | Voting
- Prognoza pogody | Weather forecast
- Tryb ciemny | Dark mode
- Dodawanie zdjęć i dokumentów | Uploading photos and documents
- Mapy | Maps
- Powiadomienia | Notifications
- Aktualizacje w czasie rzeczywistym | Real-time updates

### Kiedy MVP jest gotowe?

Dwie osoby korzystające z osobnych kont mogą wspólnie zorganizować
wyjazd: jedna tworzy wyjazd, druga dołącza przez zaproszenie.
Obie mogą zarządzać zadaniami, oznaczać je jako wykonane oraz zapisywać
i przeglądać wydatki.

Dane pozostają dostępne po odświeżeniu strony i ponownym zalogowaniu.
Zmiany innych uczestników są widoczne po odświeżeniu widoku.
Osoba nienależąca do wyjazdu nie może przeglądać ani zmieniać jego danych.
