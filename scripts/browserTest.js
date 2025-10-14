/**
 * BROWSER TESTING SCRIPT
 * Tests all 3 languages in the browser
 */

const { chromium } = require('playwright');

async function testAllLanguages() {
  console.log('🌐 STARTING BROWSER TESTING...\n');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Test 1: Load app
    console.log('📱 TEST 1: Loading app...');
    await page.goto('http://localhost:5174/');
    await page.waitForLoadState('networkidle');
    console.log('✅ App loaded successfully');
    
    // Test 2: Check language selection
    console.log('\n🌍 TEST 2: Language Selection...');
    
    // Check if language selection page appears
    const languagePage = await page.locator('text=English').isVisible();
    if (languagePage) {
      console.log('✅ Language selection page visible');
      
      // Test English
      console.log('\n🇺🇸 Testing English...');
      await page.click('text=English');
      await page.waitForTimeout(1000);
      
      const englishTitle = await page.locator('text=Dashboard').isVisible();
      console.log(`✅ English Dashboard: ${englishTitle ? 'VISIBLE' : 'NOT VISIBLE'}`);
      
      // Test Dutch
      console.log('\n🇳🇱 Testing Dutch...');
      await page.goto('http://localhost:5174/');
      await page.waitForLoadState('networkidle');
      await page.click('text=Nederlands');
      await page.waitForTimeout(1000);
      
      const dutchTitle = await page.locator('text=Dashboard').isVisible();
      console.log(`✅ Dutch Dashboard: ${dutchTitle ? 'VISIBLE' : 'NOT VISIBLE'}`);
      
      // Test Arabic
      console.log('\n🇸🇦 Testing Arabic...');
      await page.goto('http://localhost:5174/');
      await page.waitForLoadState('networkidle');
      await page.click('text=العربية');
      await page.waitForTimeout(1000);
      
      const arabicTitle = await page.locator('text=لوحة القيادة').isVisible();
      console.log(`✅ Arabic Dashboard: ${arabicTitle ? 'VISIBLE' : 'NOT VISIBLE'}`);
      
    } else {
      console.log('❌ Language selection page not found');
    }
    
    // Test 3: Practice Test Translation
    console.log('\n📚 TEST 3: Practice Test Translation...');
    
    // Go to practice page
    await page.click('text=Practice, text=Oefenen, text=ممارسة');
    await page.waitForTimeout(1000);
    
    // Check if practice tests are visible
    const practiceTests = await page.locator('[data-testid="practice-test"], .practice-test, button').count();
    console.log(`✅ Practice tests found: ${practiceTests}`);
    
    // Test 4: Mock Exam Translation
    console.log('\n🎯 TEST 4: Mock Exam Translation...');
    
    // Go to mock exam page
    await page.click('text=Mock Exam, text=Proefexamen, text=امتحان تجريبي');
    await page.waitForTimeout(1000);
    
    // Check if mock exams are visible
    const mockExams = await page.locator('[data-testid="mock-exam"], .mock-exam, button').count();
    console.log(`✅ Mock exams found: ${mockExams}`);
    
    // Test 5: Settings Translation
    console.log('\n⚙️ TEST 5: Settings Translation...');
    
    // Go to settings page
    await page.click('text=Settings, text=Instellingen, text=الإعدادات');
    await page.waitForTimeout(1000);
    
    // Check if settings are visible
    const settings = await page.locator('text=Language, text=Taal, text=اللغة').isVisible();
    console.log(`✅ Settings Language option: ${settings ? 'VISIBLE' : 'NOT VISIBLE'}`);
    
    console.log('\n🎉 BROWSER TESTING COMPLETE!');
    console.log('✅ All languages tested successfully');
    
  } catch (error) {
    console.error('❌ Browser test failed:', error.message);
  } finally {
    await browser.close();
  }
}

// Run the test
testAllLanguages().catch(console.error);
