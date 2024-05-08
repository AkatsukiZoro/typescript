Feature: Adactin hotel app

  Scenario Outline: As a user, I can open adactin hotel app

    Given I open the browser and load the url <homeurl>
    When I enter username <username> and  password <password>
    Then I click login button

    When I select location <location> and hotels <hotel>
    And I select number of rooms <rooms>
    And I take screenshot of the browser


    Examples:
      | homeurl                               | username     | password | location | hotel          | rooms |
      | https://adactinhotelapp.com/index.php | AkatsukiZoro | Pixel@v1 | London   | Hotel Sunshine | one   |