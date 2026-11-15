# Wdrożenie książki kucharskiej na GitHub Pages

1. Rozpakuj ZIP. Wejdź na [repozytorium Przepisy](https://github.com/nalesnior01/Przepisy).
2. Wybierz gałąź `main`, a następnie **Add file → Upload files**. Przeciągnij do okna GitHuba zawartość rozpakowanego folderu, w tym katalog `images`. Plik `index.html` powinien leżeć bezpośrednio w głównym katalogu repozytorium. Zapisz zmiany przez **Commit changes**.
3. W **Settings → Pages** sprawdź, czy źródłem jest **Deploy from a branch**, z gałęzią **main** i folderem **/(root)**. Jeśli te ustawienia już obowiązują, wystarczy zapis plików. [Instrukcja GitHuba](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
4. Po zakończeniu publikacji otwórz [menu książki kucharskiej](https://nalesnior01.github.io/Przepisy/). Aby sprawdzić import, wklej publiczny adres wybranego przepisu, np. [Paelli](https://nalesnior01.github.io/Przepisy/paella.html), do funkcji importu z adresu URL w Samsung Food.

## Dodawanie i podmiana zdjęć

Otwórz folder `images` w repozytorium i użyj **Add file → Upload files**. Wgraj zdjęcie w formacie JPEG. Nazwa musi być identyczna z nazwą pliku przepisu, z rozszerzeniem `.jpg` zamiast `.html`, np. `paella.html` → `images/paella.jpg`. Używaj małych liter i zachowaj myślniki.

Po publikacji zdjęcie pojawi się w menu i na stronie przepisu. Aby je podmienić, wgraj inny JPEG pod tą samą nazwą i zapisz zmiany. Jeśli przeglądarka nadal pokazuje poprzednią wersję, odśwież stronę przez **Ctrl+F5**. Gdy zdjęcia brakuje, strona pomija miejsce na zdjęcie.
