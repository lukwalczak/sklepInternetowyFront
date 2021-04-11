# Sklep Internetowy - Frontend
***
##1. Uruchomienie projektu
Aby uruchomić aplikację należy użyć komendy ```nmp run serve``` w katalogu projektu.<br>
Aplikacja została zaprojektowania do działania razem z [API](https://github.com/lukwalczak/sklepInternetowy), bez niego 
nie będzie działać poprawnie.

W przypadku API pracującym na porcie innym niż 2115 należy zmienić linijkę konfiguracyjną w [pliku konfiguracyjnym](./src/services/axiosinstance.js),
należy edytować ```options.baseURL``` na wybrany przez nas adres