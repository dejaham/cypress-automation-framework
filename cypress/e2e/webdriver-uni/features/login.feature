# Tests de la fonctionnalité de connexion sur WebdriverUniversity
# Cette suite de tests vérifie le comportement de la page de connexion
# en testant différentes combinaisons d'identifiants et mots de passe

@regression
Feature: WebdriverUniversity Login Page

    # Test de connexion avec des identifiants valides
    # Vérifie que l'utilisateur peut se connecter avec succès
    Scenario: Login using valid credentials
        Given I access the WebdriverUniversity Login Portal page
        When I enter a username webdriver
        And I enter a password webdriver123
        And I click on the login button
        Then I should be presented with the following message validation succeeded

    # Test de connexion avec des identifiants invalides
    # Vérifie que le système rejette les mauvais mots de passe
    Scenario: Login using invalid credentials
        Given I access the WebdriverUniversity Login Portal page
        When I enter a username webdriver
        And I enter a password webdriver555
        And I click on the login button
        Then I should be presented with the following message validation failed

    # Test paramétré de différentes combinaisons de connexion
    # Vérifie plusieurs scénarios de connexion avec différents identifiants
    @login
    Scenario Outline: Test Login via WebdriverUniversity Login Portal
        Given I access the WebdriverUniversity Login Portal page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following message <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver555 | validation failed    |
            | joe       | pass123      | validation failed    |
